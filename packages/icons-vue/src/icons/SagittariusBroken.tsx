// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SagittariusBrokenSvg from '@ant-design/icons-svg/lib/asn/SagittariusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SagittariusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SagittariusBroken: SagittariusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SagittariusBrokenSvg}></AntdIcon>;
};

SagittariusBroken.displayName = 'SagittariusBroken';
SagittariusBroken.inheritAttrs = false;
export default SagittariusBroken;