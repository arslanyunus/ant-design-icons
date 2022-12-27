// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagUpOutlineSvg from '@ant-design/icons-svg/lib/asn/HashtagUpOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagUpOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagUpOutline: HashtagUpOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagUpOutlineSvg}></AntdIcon>;
};

HashtagUpOutline.displayName = 'HashtagUpOutline';
HashtagUpOutline.inheritAttrs = false;
export default HashtagUpOutline;