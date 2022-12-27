// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardCloseBoldSvg from '@ant-design/icons-svg/lib/asn/ClipboardCloseBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardCloseBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardCloseBold: ClipboardCloseBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardCloseBoldSvg}></AntdIcon>;
};

ClipboardCloseBold.displayName = 'ClipboardCloseBold';
ClipboardCloseBold.inheritAttrs = false;
export default ClipboardCloseBold;