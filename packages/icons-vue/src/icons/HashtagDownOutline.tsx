// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagDownOutlineSvg from '@ant-design/icons-svg/lib/asn/HashtagDownOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagDownOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagDownOutline: HashtagDownOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagDownOutlineSvg}></AntdIcon>;
};

HashtagDownOutline.displayName = 'HashtagDownOutline';
HashtagDownOutline.inheritAttrs = false;
export default HashtagDownOutline;