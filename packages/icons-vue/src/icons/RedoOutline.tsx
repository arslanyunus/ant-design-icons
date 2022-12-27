// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedoOutlineSvg from '@ant-design/icons-svg/lib/asn/RedoOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedoOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedoOutline: RedoOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedoOutlineSvg}></AntdIcon>;
};

RedoOutline.displayName = 'RedoOutline';
RedoOutline.inheritAttrs = false;
export default RedoOutline;