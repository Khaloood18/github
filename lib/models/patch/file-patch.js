    let newFile = this.getNewFile();
    if (this.getStatus() === 'deleted') {
        // Whole file deletion staged.
      } else {
        // Partial file deletion, which becomes a modification.
        newFile = this.getOldFile();
    const patch = this.patch.buildStagePatchForLines(
    return this.clone({newFile, patch});
    const patch = this.patch.buildUnstagePatchForLines(
    return this.clone({oldFile, newFile, patch});
  toStringIn(buffer) {
      return left.toStringIn(buffer) + right.toStringIn(buffer);
      return this.getHeaderString() + this.getPatch().toStringIn(buffer);