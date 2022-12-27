// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagDownLinearSvg from '@ant-design/icons-svg/lib/asn/HashtagDownLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagDownLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagDownLinear: HashtagDownLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagDownLinearSvg}></AntdIcon>;
};

HashtagDownLinear.displayName = 'HashtagDownLinear';
HashtagDownLinear.inheritAttrs = false;
export default HashtagDownLinear;