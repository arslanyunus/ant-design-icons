// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagUpBrokenSvg from '@ant-design/icons-svg/lib/asn/HashtagUpBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagUpBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagUpBroken: HashtagUpBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagUpBrokenSvg}></AntdIcon>;
};

HashtagUpBroken.displayName = 'HashtagUpBroken';
HashtagUpBroken.inheritAttrs = false;
export default HashtagUpBroken;