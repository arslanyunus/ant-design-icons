// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagBoldSvg from '@ant-design/icons-svg/lib/asn/HashtagBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagBold: HashtagBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagBoldSvg}></AntdIcon>;
};

HashtagBold.displayName = 'HashtagBold';
HashtagBold.inheritAttrs = false;
export default HashtagBold;