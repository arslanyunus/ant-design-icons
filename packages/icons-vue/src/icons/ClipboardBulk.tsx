// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardBulkSvg from '@ant-design/icons-svg/lib/asn/ClipboardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardBulk: ClipboardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardBulkSvg}></AntdIcon>;
};

ClipboardBulk.displayName = 'ClipboardBulk';
ClipboardBulk.inheritAttrs = false;
export default ClipboardBulk;