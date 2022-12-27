// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PeopleOutlineSvg from '@ant-design/icons-svg/lib/asn/PeopleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PeopleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PeopleOutline: PeopleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PeopleOutlineSvg}></AntdIcon>;
};

PeopleOutline.displayName = 'PeopleOutline';
PeopleOutline.inheritAttrs = false;
export default PeopleOutline;