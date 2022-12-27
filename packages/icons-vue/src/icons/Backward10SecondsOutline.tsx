// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Backward10SecondsOutlineSvg from '@ant-design/icons-svg/lib/asn/Backward10SecondsOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Backward10SecondsOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Backward10SecondsOutline: Backward10SecondsOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Backward10SecondsOutlineSvg}></AntdIcon>;
};

Backward10SecondsOutline.displayName = 'Backward10SecondsOutline';
Backward10SecondsOutline.inheritAttrs = false;
export default Backward10SecondsOutline;