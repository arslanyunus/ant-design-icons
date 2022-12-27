// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SagittariusBoldSvg from '@ant-design/icons-svg/lib/asn/SagittariusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SagittariusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SagittariusBold: SagittariusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SagittariusBoldSvg}></AntdIcon>;
};

SagittariusBold.displayName = 'SagittariusBold';
SagittariusBold.inheritAttrs = false;
export default SagittariusBold;