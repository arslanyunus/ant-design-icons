// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagUpTwoToneSvg from '@ant-design/icons-svg/lib/asn/HashtagUpTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagUpTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagUpTwoTone: HashtagUpTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagUpTwoToneSvg}></AntdIcon>;
};

HashtagUpTwoTone.displayName = 'HashtagUpTwoTone';
HashtagUpTwoTone.inheritAttrs = false;
export default HashtagUpTwoTone;