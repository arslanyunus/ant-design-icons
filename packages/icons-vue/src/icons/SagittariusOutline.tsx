// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SagittariusOutlineSvg from '@ant-design/icons-svg/lib/asn/SagittariusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SagittariusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SagittariusOutline: SagittariusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SagittariusOutlineSvg}></AntdIcon>;
};

SagittariusOutline.displayName = 'SagittariusOutline';
SagittariusOutline.inheritAttrs = false;
export default SagittariusOutline;