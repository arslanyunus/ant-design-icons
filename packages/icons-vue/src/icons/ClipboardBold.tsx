// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardBoldSvg from '@ant-design/icons-svg/lib/asn/ClipboardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardBold: ClipboardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardBoldSvg}></AntdIcon>;
};

ClipboardBold.displayName = 'ClipboardBold';
ClipboardBold.inheritAttrs = false;
export default ClipboardBold;