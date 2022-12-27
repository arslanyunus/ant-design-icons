// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarSlashLinearSvg from '@ant-design/icons-svg/lib/asn/StarSlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarSlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarSlashLinear: StarSlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarSlashLinearSvg}></AntdIcon>;
};

StarSlashLinear.displayName = 'StarSlashLinear';
StarSlashLinear.inheritAttrs = false;
export default StarSlashLinear;