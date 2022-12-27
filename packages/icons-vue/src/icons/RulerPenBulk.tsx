// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerPenBulkSvg from '@ant-design/icons-svg/lib/asn/RulerPenBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerPenBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerPenBulk: RulerPenBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerPenBulkSvg}></AntdIcon>;
};

RulerPenBulk.displayName = 'RulerPenBulk';
RulerPenBulk.inheritAttrs = false;
export default RulerPenBulk;