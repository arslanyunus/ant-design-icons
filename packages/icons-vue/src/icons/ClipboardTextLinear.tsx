// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTextLinearSvg from '@ant-design/icons-svg/lib/asn/ClipboardTextLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTextLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTextLinear: ClipboardTextLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTextLinearSvg}></AntdIcon>;
};

ClipboardTextLinear.displayName = 'ClipboardTextLinear';
ClipboardTextLinear.inheritAttrs = false;
export default ClipboardTextLinear;