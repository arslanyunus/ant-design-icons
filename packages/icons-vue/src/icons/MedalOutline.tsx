// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalOutlineSvg from '@ant-design/icons-svg/lib/asn/MedalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalOutline: MedalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalOutlineSvg}></AntdIcon>;
};

MedalOutline.displayName = 'MedalOutline';
MedalOutline.inheritAttrs = false;
export default MedalOutline;