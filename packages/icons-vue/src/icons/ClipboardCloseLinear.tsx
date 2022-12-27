// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardCloseLinearSvg from '@ant-design/icons-svg/lib/asn/ClipboardCloseLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardCloseLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardCloseLinear: ClipboardCloseLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardCloseLinearSvg}></AntdIcon>;
};

ClipboardCloseLinear.displayName = 'ClipboardCloseLinear';
ClipboardCloseLinear.inheritAttrs = false;
export default ClipboardCloseLinear;