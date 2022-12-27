// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MathBulkSvg from '@ant-design/icons-svg/lib/asn/MathBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MathBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MathBulk: MathBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MathBulkSvg}></AntdIcon>;
};

MathBulk.displayName = 'MathBulk';
MathBulk.inheritAttrs = false;
export default MathBulk;