// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTickBrokenSvg from '@ant-design/icons-svg/lib/asn/ClipboardTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTickBroken: ClipboardTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTickBrokenSvg}></AntdIcon>;
};

ClipboardTickBroken.displayName = 'ClipboardTickBroken';
ClipboardTickBroken.inheritAttrs = false;
export default ClipboardTickBroken;