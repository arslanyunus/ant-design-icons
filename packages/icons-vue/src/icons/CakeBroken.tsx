// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CakeBrokenSvg from '@ant-design/icons-svg/lib/asn/CakeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CakeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CakeBroken: CakeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CakeBrokenSvg}></AntdIcon>;
};

CakeBroken.displayName = 'CakeBroken';
CakeBroken.inheritAttrs = false;
export default CakeBroken;