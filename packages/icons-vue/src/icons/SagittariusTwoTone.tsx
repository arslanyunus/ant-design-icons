// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SagittariusTwoToneSvg from '@ant-design/icons-svg/lib/asn/SagittariusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SagittariusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SagittariusTwoTone: SagittariusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SagittariusTwoToneSvg}></AntdIcon>;
};

SagittariusTwoTone.displayName = 'SagittariusTwoTone';
SagittariusTwoTone.inheritAttrs = false;
export default SagittariusTwoTone;