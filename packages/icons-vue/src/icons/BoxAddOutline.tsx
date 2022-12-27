// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxAddOutlineSvg from '@ant-design/icons-svg/lib/asn/BoxAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxAddOutline: BoxAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxAddOutlineSvg}></AntdIcon>;
};

BoxAddOutline.displayName = 'BoxAddOutline';
BoxAddOutline.inheritAttrs = false;
export default BoxAddOutline;