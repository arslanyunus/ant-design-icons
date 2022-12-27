// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardCloseBrokenSvg from '@ant-design/icons-svg/lib/asn/ClipboardCloseBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardCloseBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardCloseBroken: ClipboardCloseBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardCloseBrokenSvg}></AntdIcon>;
};

ClipboardCloseBroken.displayName = 'ClipboardCloseBroken';
ClipboardCloseBroken.inheritAttrs = false;
export default ClipboardCloseBroken;