// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagDownTwoToneSvg from '@ant-design/icons-svg/lib/asn/HashtagDownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagDownTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagDownTwoTone: HashtagDownTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagDownTwoToneSvg}></AntdIcon>;
};

HashtagDownTwoTone.displayName = 'HashtagDownTwoTone';
HashtagDownTwoTone.inheritAttrs = false;
export default HashtagDownTwoTone;