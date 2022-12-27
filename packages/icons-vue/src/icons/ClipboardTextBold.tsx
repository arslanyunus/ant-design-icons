// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTextBoldSvg from '@ant-design/icons-svg/lib/asn/ClipboardTextBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTextBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTextBold: ClipboardTextBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTextBoldSvg}></AntdIcon>;
};

ClipboardTextBold.displayName = 'ClipboardTextBold';
ClipboardTextBold.inheritAttrs = false;
export default ClipboardTextBold;