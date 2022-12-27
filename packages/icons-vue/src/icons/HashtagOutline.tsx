// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HashtagOutlineSvg from '@ant-design/icons-svg/lib/asn/HashtagOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HashtagOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HashtagOutline: HashtagOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HashtagOutlineSvg}></AntdIcon>;
};

HashtagOutline.displayName = 'HashtagOutline';
HashtagOutline.inheritAttrs = false;
export default HashtagOutline;