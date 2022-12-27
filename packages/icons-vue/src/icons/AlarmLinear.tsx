// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlarmLinearSvg from '@ant-design/icons-svg/lib/asn/AlarmLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlarmLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlarmLinear: AlarmLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlarmLinearSvg}></AntdIcon>;
};

AlarmLinear.displayName = 'AlarmLinear';
AlarmLinear.inheritAttrs = false;
export default AlarmLinear;