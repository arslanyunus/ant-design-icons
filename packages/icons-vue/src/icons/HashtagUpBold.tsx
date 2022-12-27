// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagUpBoldSvg from '@ant-design/icons-svg/lib/asn/HashtagUpBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagUpBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagUpBold: HashtagUpBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagUpBoldSvg}></AntdIcon>;
};

HashtagUpBold.displayName = 'HashtagUpBold';
HashtagUpBold.inheritAttrs = false;
export default HashtagUpBold;