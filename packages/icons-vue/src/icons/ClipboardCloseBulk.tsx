// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardCloseBulkSvg from '@ant-design/icons-svg/lib/asn/ClipboardCloseBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardCloseBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardCloseBulk: ClipboardCloseBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardCloseBulkSvg}></AntdIcon>;
};

ClipboardCloseBulk.displayName = 'ClipboardCloseBulk';
ClipboardCloseBulk.inheritAttrs = false;
export default ClipboardCloseBulk;