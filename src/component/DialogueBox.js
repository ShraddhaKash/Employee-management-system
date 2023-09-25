import styles from "./DialogueBox.module.css";

function DialogueBox({ onClickCancel, onClickConfirm }) {
  return (
    <div>
      <div id={styles.dialogueBoxMain}>
        <div className={styles.dialogueBox}>
          <div>
            <p className={styles.dialogueP}>Are you sure?</p>
          </div>
          <div className={styles.dialogueBoxBtn}>
            <button
              id="cancel"
              className={styles.dialogueBtn}
              onClick={onClickCancel}
            >
              Cancel
            </button>
            <button
              id="confirm"
              className={styles.dialogueBtn} //{styles.dis}
              onClick={onClickConfirm}
            >
              confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DialogueBox;
