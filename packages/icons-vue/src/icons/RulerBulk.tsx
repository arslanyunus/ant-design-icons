// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RulerBulkSvg from '@ant-design/icons-svg/lib/asn/RulerBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RulerBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RulerBulk: RulerBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerBulkSvg}></AntdIcon>;
};

RulerBulk.displayName = 'RulerBulk';
RulerBulk.inheritAttrs = false;
export default RulerBulk;