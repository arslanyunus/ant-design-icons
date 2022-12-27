// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RepeateOneLinearSvg from '@ant-design/icons-svg/lib/asn/RepeateOneLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RepeateOneLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RepeateOneLinear: RepeateOneLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RepeateOneLinearSvg}></AntdIcon>;
};

RepeateOneLinear.displayName = 'RepeateOneLinear';
RepeateOneLinear.inheritAttrs = false;
export default RepeateOneLinear;