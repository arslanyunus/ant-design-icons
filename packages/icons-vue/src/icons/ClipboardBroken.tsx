// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardBrokenSvg from '@ant-design/icons-svg/lib/asn/ClipboardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardBroken: ClipboardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardBrokenSvg}></AntdIcon>;
};

ClipboardBroken.displayName = 'ClipboardBroken';
ClipboardBroken.inheritAttrs = false;
export default ClipboardBroken;