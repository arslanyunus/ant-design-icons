// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagLinearSvg from '@ant-design/icons-svg/lib/asn/HashtagLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagLinear: HashtagLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagLinearSvg}></AntdIcon>;
};

HashtagLinear.displayName = 'HashtagLinear';
HashtagLinear.inheritAttrs = false;
export default HashtagLinear;