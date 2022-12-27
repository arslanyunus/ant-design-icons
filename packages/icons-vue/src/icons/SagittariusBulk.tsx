// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SagittariusBulkSvg from '@ant-design/icons-svg/lib/asn/SagittariusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SagittariusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SagittariusBulk: SagittariusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SagittariusBulkSvg}></AntdIcon>;
};

SagittariusBulk.displayName = 'SagittariusBulk';
SagittariusBulk.inheritAttrs = false;
export default SagittariusBulk;