// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagTwoToneSvg from '@ant-design/icons-svg/lib/asn/HashtagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagTwoTone: HashtagTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagTwoToneSvg}></AntdIcon>;
};

HashtagTwoTone.displayName = 'HashtagTwoTone';
HashtagTwoTone.inheritAttrs = false;
export default HashtagTwoTone;