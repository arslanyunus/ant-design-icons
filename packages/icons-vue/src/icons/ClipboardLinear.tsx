// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardLinearSvg from '@ant-design/icons-svg/lib/asn/ClipboardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardLinear: ClipboardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardLinearSvg}></AntdIcon>;
};

ClipboardLinear.displayName = 'ClipboardLinear';
ClipboardLinear.inheritAttrs = false;
export default ClipboardLinear;