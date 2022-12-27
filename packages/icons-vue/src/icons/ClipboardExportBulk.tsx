// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardExportBulkSvg from '@ant-design/icons-svg/lib/asn/ClipboardExportBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardExportBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardExportBulk: ClipboardExportBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardExportBulkSvg}></AntdIcon>;
};

ClipboardExportBulk.displayName = 'ClipboardExportBulk';
ClipboardExportBulk.inheritAttrs = false;
export default ClipboardExportBulk;