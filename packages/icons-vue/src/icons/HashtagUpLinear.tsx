// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagUpLinearSvg from '@ant-design/icons-svg/lib/asn/HashtagUpLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagUpLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagUpLinear: HashtagUpLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagUpLinearSvg}></AntdIcon>;
};

HashtagUpLinear.displayName = 'HashtagUpLinear';
HashtagUpLinear.inheritAttrs = false;
export default HashtagUpLinear;