// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NextOutlineSvg from '@ant-design/icons-svg/lib/asn/NextOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NextOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NextOutline: NextOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NextOutlineSvg}></AntdIcon>;
};

NextOutline.displayName = 'NextOutline';
NextOutline.inheritAttrs = false;
export default NextOutline;