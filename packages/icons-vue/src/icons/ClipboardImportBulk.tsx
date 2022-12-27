// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardImportBulkSvg from '@ant-design/icons-svg/lib/asn/ClipboardImportBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardImportBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardImportBulk: ClipboardImportBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardImportBulkSvg}></AntdIcon>;
};

ClipboardImportBulk.displayName = 'ClipboardImportBulk';
ClipboardImportBulk.inheritAttrs = false;
export default ClipboardImportBulk;