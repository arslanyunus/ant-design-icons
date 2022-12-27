// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SagittariusLinearSvg from '@ant-design/icons-svg/lib/asn/SagittariusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SagittariusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SagittariusLinear: SagittariusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SagittariusLinearSvg}></AntdIcon>;
};

SagittariusLinear.displayName = 'SagittariusLinear';
SagittariusLinear.inheritAttrs = false;
export default SagittariusLinear;