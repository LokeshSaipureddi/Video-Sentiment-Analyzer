# 🎮 Video Sentiment Analyzer

## 🎥 Title: Multimodal Emotion and Sentiment Analysis from Video Conversations

An end-to-end multimodal deep learning application for sentiment and emotion recognition from videos. This project leverages audio, visual, and textual cues to analyze emotions in conversations, utilizing the MELD dataset.

---

## 📌 Overview

The **Video Sentiment Analyzer** processes video inputs to output sentiment and emotion predictions. It employs a multimodal deep learning model that extracts and combines features from audio, text, and visual data.

---

## 🧠 Model Architecture

The architecture separates video inputs into three modalities:

* **Audio**: Extracted using FFmpeg and processed through a simple neural network.
* **Text**: Transcribed from audio and analyzed using a BERT-based model.
* **Visual**: Frames extracted from videos and processed using a ResNet model.

The features from these modalities are concatenated and passed through fully connected layers to predict sentiment and emotion labels.

---

## 🝻 Model Architecture Diagram

![Model Architecture Diagram](./public/model-architecture.png)

*Note: Replace the above path with the actual path to your architecture diagram image.*

---

## 🗂 Dataset: MELD (Multimodal EmotionLines Dataset)

The project utilizes the [MELD dataset](https://affective-meld.github.io/), an extension of the EmotionLines dataset. MELD contains over 13,000 utterances from 1,433 dialogues sourced from the TV series *Friends*. Each utterance is annotated with one of seven emotions: Anger, Disgust, Sadness, Joy, Neutral, Surprise, and Fear, as well as sentiment labels: positive, negative, or neutral. The dataset includes audio, visual, and textual modalities, making it suitable for multimodal emotion recognition in conversations.

---

## 🛠️ Technologies Used

* **Frontend & Backend**: Next.js
* **Model Training**: AWS SageMaker
* **Data Storage**: AWS S3
* **Dataset Installation**: AWS EC2
* **Logging**: TensorBoard
* **Audio Processing**: FFmpeg
* **Text Analysis**: BERT
* **Visual Analysis**: ResNet

---

## 🚀 Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/LokeshSaipureddi/Video-Sentiment-Analyzer.git
   cd Video-Sentiment-Analyzer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

---

## 📊 Model Training & Deployment

* **Training**: The multimodal model is trained on AWS SageMaker, utilizing the MELD dataset.
* **Deployment**: The trained model is deployed and integrated into the Next.js application for real-time inference.
* **Logging**: Training metrics and logs are monitored using TensorBoard.

---

## 📁 Project Structure

```
Video-Sentiment-Analyzer/
├── dataset/                      # Contains the MELD dataset and related preprocessing scripts
├── deployment/                   # AWS deployment scripts and configurations
├── sentiment-analyzer-frontend/ # Next.js frontend and backend application
├── training/                     # Model training scripts and notebooks
├── .gitignore                    # Specifies intentionally untracked files to ignore
├── package-lock.json             # Auto-generated file describing the exact tree of dependencies
├── train_sagemaker.py            # Script for training the model on AWS SageMaker
└── README.md                     # Project documentation
```

---

## 📚 References

* [MELD Dataset](https://affective-meld.github.io/)
* [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://arxiv.org/abs/1810.04805)
* [Deep Residual Learning for Image Recognition (ResNet)](https://arxiv.org/abs/1512.03385)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
