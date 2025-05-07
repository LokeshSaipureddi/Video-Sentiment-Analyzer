from sagemaker.pytorch import PyTorchModel
import sagemaker


def deploy_endpoint():
    sagemaker.Session()
    role = "arn:aws:iam::529088287904:role/sentiment-analysis-execution-role"

    model_uri = "s3://sagemaker-us-east-1-529088287904/pytorch-training-2025-05-06-22-11-37-489/output/model.tar.gz"

    model = PyTorchModel(
        model_data=model_uri,
        role=role,
        framework_version="2.5.1",
        py_version="py311",
        entry_point="inference.py",
        source_dir=".",
        name="sentiment-analysis-model",
    )

    predictor = model.deploy(
        initial_instance_count=1,
        instance_type="ml.g5.xlarge",
        endpoint_name="sentiment-analysis-endpoint",
    )


if __name__ == "__main__":
    deploy_endpoint()
