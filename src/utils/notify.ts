import * as vscode from 'vscode';

import { disableNotifications } from '../providers';
import { NotifyType } from "../model";

/**
 * Notification actions
 * @param {NotifyType} type Indicated notification type
 * @returns {vscode.DocumentDropEdit} undefined text in active text editor.
 */
export function notify(type: NotifyType): vscode.DocumentDropEdit {

  switch (type) {
    case NotifyType.SameFilePath: {
      /* 
        Emit same file path, window notification (warning)
      */
      disableNotifications || vscode.window.showWarningMessage(`Same file path.`);
  		return { insertText: undefined };
    }
    case NotifyType.NotSupported: {
      /* 
        Emit not supported, window notification (warning)
      */
      disableNotifications || vscode.window.showWarningMessage(`Not supported.`);
  		return { insertText: undefined };
    }
    case NotifyType.DifferentFileExtension: {
      /* 
        Emit different file extension, window notification (error)
      */
      disableNotifications || vscode.window.showErrorMessage(`Different file extension.`);
  		return { insertText: undefined };
    }
  }

}
