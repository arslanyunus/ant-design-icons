// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagDownBoldSvg from '@ant-design/icons-svg/lib/asn/HashtagDownBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagDownBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagDownBold: HashtagDownBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagDownBoldSvg}></AntdIcon>;
};

HashtagDownBold.displayName = 'HashtagDownBold';
HashtagDownBold.inheritAttrs = false;
export default HashtagDownBold;