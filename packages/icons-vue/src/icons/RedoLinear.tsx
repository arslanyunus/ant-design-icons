// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedoLinearSvg from '@ant-design/icons-svg/lib/asn/RedoLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedoLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedoLinear: RedoLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedoLinearSvg}></AntdIcon>;
};

RedoLinear.displayName = 'RedoLinear';
RedoLinear.inheritAttrs = false;
export default RedoLinear;