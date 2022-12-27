// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RouteSquareBulkSvg from '@ant-design/icons-svg/lib/asn/RouteSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RouteSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RouteSquareBulk: RouteSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RouteSquareBulkSvg}></AntdIcon>;
};

RouteSquareBulk.displayName = 'RouteSquareBulk';
RouteSquareBulk.inheritAttrs = false;
export default RouteSquareBulk;