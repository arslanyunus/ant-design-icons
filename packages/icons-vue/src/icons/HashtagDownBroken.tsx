// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagDownBrokenSvg from '@ant-design/icons-svg/lib/asn/HashtagDownBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagDownBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagDownBroken: HashtagDownBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagDownBrokenSvg}></AntdIcon>;
};

HashtagDownBroken.displayName = 'HashtagDownBroken';
HashtagDownBroken.inheritAttrs = false;
export default HashtagDownBroken;