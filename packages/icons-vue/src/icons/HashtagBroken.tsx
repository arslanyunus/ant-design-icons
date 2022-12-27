// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagBrokenSvg from '@ant-design/icons-svg/lib/asn/HashtagBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagBroken: HashtagBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagBrokenSvg}></AntdIcon>;
};

HashtagBroken.displayName = 'HashtagBroken';
HashtagBroken.inheritAttrs = false;
export default HashtagBroken;